import {
  ArrowRight,
  Activity,
  BarChart3,
  Users,
  Calendar,
  FileText,
  Clock,
  CheckCircle,
  ShieldCheck,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">
      {/*<div className="flex w-full items-center gap-10 px-6 py-12 lg:px-14">*/}
      <div className="mx-auto flex w-full max-w-7xl items-center gap-10">
        <div className="flex flex-col justify-center p-4">
          <div className="w-full max-w-lg">
            {/* Badge */}
            <div className="bg-primary/10 border-primary/20 animate-fade-in mb-8 inline-flex items-center gap-2 rounded-full border px-4 py-2">
              <ShieldCheck className="text-primary h-4 w-4" />
              <span className="text-primary text-sm font-medium">Sistem Terintegrasi</span>
            </div>

            {/* Heading */}
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl">
              <span className="text-foreground block">Transformasi Digital</span>
              <span className="from-primary mt-2 block">Bisnis Anda</span>
            </h1>

            {/* Description */}
            <p className="text-muted-foreground text-md mb-8 leading-relaxed">
              Platform Inventory yang membantu Anda mengelola stok, pesanan, dan laporan secara
              real-time untuk meningkatkan efisiensi operasional dan akurasi data bisnis.
            </p>

            {/* Key Features */}
            <div className="animate-slide-up animation-delay-300 mb-10 grid grid-cols-2 gap-3">
              {[
                'Manajemen Produk & Stok',
                'Purchase & Sales Order',
                'Multi Gudang',
                'Laporan Real-time',
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle className="text-primary h-3.5 w-3.5 flex-shrink-0" />
                  <span className="text-foreground text-sm font-medium">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="animate-slide-up animation-delay-400 flex flex-col gap-4 sm:flex-row">
              <button
                onClick={() => navigate('/auth/sign-in')}
                className="group from-primary text-primary-foreground shadow-primary/25 hover:shadow-primary/30 relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-r to-blue-600 px-6 py-3 text-base font-medium shadow-lg transition-all duration-300 hover:shadow-xl sm:px-8 sm:py-4"
              >
                <span className="relative z-10">Demo Gratis</span>
                <ArrowRight className="relative z-10 ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 sm:h-5 sm:w-5" />
                <div className="to-primary absolute inset-0 bg-gradient-to-r from-blue-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              </button>

              <button className="border-input bg-background/50 hover:bg-accent hover:border-accent-foreground/20 inline-flex items-center justify-center rounded-lg border px-6 py-3 text-base font-medium backdrop-blur-sm transition-all duration-300 sm:px-8 sm:py-4">
                Hubungi Sales
              </button>
            </div>

            {/* Stats */}
            <div className="border-border/30 animate-fade-in animation-delay-500 mt-10 flex items-center gap-6 border-t pt-8">
              <div>
                <div className="text-primary text-2xl font-bold">999+</div>
                <div className="text-muted-foreground text-sm">Bisnis Aktif</div>
              </div>
              <div className="bg-border/50 h-8 w-px"></div>
              <div>
                <div className="text-primary text-2xl font-bold">99.8%</div>
                <div className="text-muted-foreground text-sm">Sistem Waktu Aktif</div>
              </div>
              <div className="bg-border/50 h-8 w-px"></div>
              <div>
                <div className="text-primary text-2xl font-bold">24/7</div>
                <div className="text-muted-foreground text-sm">Layanan</div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative flex w-full flex-1 items-center justify-center">
          <div className="relative h-[500px] w-full lg:h-[600px] xl:h-[650px]">
            {/* Main Window */}
            <div className="absolute inset-0 overflow-hidden rounded-tl-3xl border-t border-l bg-white">
              {/* Mac-Style Window Header */}
              <div className="flex h-14 items-center justify-between border-b bg-linear-to-r from-white to-gray-50/80 px-6">
                {/* Traffic Light Buttons - Mac Style */}
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 cursor-pointer rounded-full bg-[#FF5F57] transition-colors hover:bg-[#FF5F57]/80"></div>
                  <div className="h-3 w-3 cursor-pointer rounded-full bg-[#FEBC2E] transition-colors hover:bg-[#FEBC2E]/80"></div>
                  <div className="h-3 w-3 cursor-pointer rounded-full bg-[#28C840] transition-colors hover:bg-[#28C840]/80"></div>
                </div>

                {/* Window Title */}
                <div className="text-foreground/70 text-sm font-medium">SIMRS Dashboard</div>

                {/* Spacer for balance */}
                <div className="w-12"></div>
              </div>

              {/* Dashboard Content */}
              <div className="h-[calc(100%-3.5rem)] p-6">
                <div className="grid h-full grid-cols-15 gap-6">
                  {/* Left Sidebar - Simplified */}
                  <div className="col-span-3 space-y-1">
                    {[
                      {
                        icon: <Activity className="h-3 w-3" />,
                        text: 'Overview',
                        active: true,
                      },
                      {
                        icon: <Users className="h-3 w-3" />,
                        text: 'Patients',
                      },
                      {
                        icon: <Calendar className="h-3 w-3" />,
                        text: 'Schedule',
                      },
                      {
                        icon: <FileText className="h-3 w-3" />,
                        text: 'Records',
                      },
                      {
                        icon: <BarChart3 className="h-3 w-3" />,
                        text: 'Analytics',
                      },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className={`flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 transition-all duration-200 ${
                          item.active
                            ? 'from-primary/10 to-primary/5 text-primary border-primary bg-linear-to-r'
                            : 'text-foreground/60 hover:bg-accent'
                        }`}
                      >
                        {item.icon}
                        <span className="text-xs font-medium">{item.text}</span>
                      </div>
                    ))}
                  </div>

                  {/* Main Content - Modern Design */}
                  <div className="col-span-12 space-y-6">
                    {/* Stats Cards - Modern Design */}
                    <div className="grid grid-cols-4 gap-4">
                      {[
                        {
                          label: "Today's Patients",
                          value: '248',
                          change: '+12%',
                          icon: <Users className="h-4 w-4" />,
                          gradient: 'from-blue-500 to-blue-600',
                        },
                        {
                          label: 'Available Beds',
                          value: '47',
                          change: '+8%',
                          icon: <Activity className="h-4 w-4" />,
                          gradient: 'from-emerald-500 to-emerald-600',
                        },
                        {
                          label: 'Avg. Wait Time',
                          value: '14m',
                          change: '-5%',
                          icon: <Clock className="h-4 w-4" />,
                          gradient: 'from-purple-500 to-purple-600',
                        },
                        {
                          label: 'Avg. Wait Time',
                          value: '14m',
                          change: '-5%',
                          icon: <Clock className="h-4 w-4" />,
                          gradient: 'from-purple-500 to-purple-600',
                        },
                      ].map((stat, index) => (
                        <div
                          key={index}
                          className="border-border/30 cursor-pointer rounded-2xl border bg-linear-to-br from-white to-gray-50 p-5 transition-all duration-300 hover:shadow-lg"
                        >
                          <div className="mb-3 flex items-center justify-between">
                            <div className={`rounded-md bg-linear-to-br p-2 ${stat.gradient}`}>
                              <div className="text-white">{stat.icon}</div>
                            </div>
                            <span className="rounded-full bg-emerald-50 px-2 py-1 text-xs font-medium text-emerald-600">
                              {stat.change}
                            </span>
                          </div>
                          <div className="text-foreground text-sm font-bold">{stat.value}</div>
                          <div className="text-muted-foreground mt-1 text-[10px]">{stat.label}</div>
                        </div>
                      ))}
                    </div>

                    {/*Chart Area - Modern Design*/}
                    {/*<div className="border-border/30 rounded-2xl border bg-linear-to-br from-white to-gray-50 p-6">*/}
                    {/*  <div className="mb-6 flex items-center justify-between">*/}
                    {/*    <div>*/}
                    {/*      <h3 className="text-foreground text-sm font-semibold">*/}
                    {/*        Patient Admissions*/}
                    {/*      </h3>*/}
                    {/*      <p className="text-muted-foreground text-[10px]">*/}
                    {/*        Last 7 days*/}
                    {/*      </p>*/}
                    {/*    </div>*/}
                    {/*    <BarChart3 className="text-primary h-4 w-4" />*/}
                    {/*  </div>*/}

                    {/*  /!* Modern Chart *!/*/}
                    {/*  <div className="flex h-32 items-end gap-1">*/}
                    {/*    {[65, 80, 60, 90, 75, 85, 70].map((height, index) => (*/}
                    {/*      <div key={index} className="group relative flex-1">*/}
                    {/*        <div*/}
                    {/*          className="from-primary/20 to-primary/5 w-full rounded-t-lg bg-gradient-to-t transition-all duration-300 group-hover:opacity-80"*/}
                    {/*          style={{ height: `${height}%` }}*/}
                    {/*        >*/}
                    {/*          <div className="from-primary h-full rounded-t-lg bg-linear-to-t to-blue-400 transition-all duration-300 group-hover:from-blue-500 group-hover:to-blue-600"></div>*/}
                    {/*        </div>*/}
                    {/*        <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">*/}
                    {/*          <div className="bg-foreground text-background rounded px-2 py-1 text-xs whitespace-nowrap">*/}
                    {/*            {height} patients*/}
                    {/*          </div>*/}
                    {/*          <div className="bg-foreground absolute bottom-0 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45"></div>*/}
                    {/*        </div>*/}
                    {/*      </div>*/}
                    {/*    ))}*/}
                    {/*  </div>*/}

                    {/*  <div className="text-muted-foreground mt-4 flex justify-between text-[10px]">*/}
                    {/*    {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(*/}
                    {/*      (day) => (*/}
                    {/*        <span key={day}>{day}</span>*/}
                    {/*      ),*/}
                    {/*    )}*/}
                    {/*  </div>*/}
                    {/*</div>*/}

                    <div className="border-border/30 rounded-2xl border bg-white p-6">
                      <div className="mb-6 flex items-center justify-between">
                        <div>
                          <h3 className="text-foreground text-sm font-semibold">
                            Patient Admissions
                          </h3>
                          <p className="text-muted-foreground text-[10px]">Last 7 days</p>
                        </div>
                        <BarChart3 className="text-primary h-4 w-4" />
                      </div>

                      {/* Chart Container */}
                      <div className="h-32">
                        {' '}
                        {/* Container untuk bars, tanpa relative */}
                        {/* Chart Bars */}
                        <div className="flex h-full items-end gap-1">
                          {[65, 80, 60, 90, 75, 85, 70].map((height, index) => (
                            <div
                              key={index}
                              className="group relative flex-1"
                              style={{
                                height: `${height}%`,
                              }}
                            >
                              {/* Bar without gradient - solid color */}
                              <div
                                className="absolute right-0 bottom-0 left-0 rounded-t-lg bg-blue-500 transition-all duration-300 group-hover:bg-blue-700"
                                style={{
                                  height: '100%',
                                }}
                              ></div>

                              {/* Tooltip */}
                              <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                <div className="rounded bg-gray-900 px-2 py-1 text-xs whitespace-nowrap text-white">
                                  {height} patients
                                </div>
                                <div className="absolute bottom-0 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 bg-gray-900"></div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Days Labels - ditempatkan tepat di bawah container chart */}
                      <div className="text-muted-foreground mt-2 flex justify-between text-[10px]">
                        {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
                          <span key={day}>{day}</span>
                        ))}
                      </div>
                    </div>

                    {/* Recent Activity - Modern Design */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="border-border/30 rounded-2xl border bg-linear-to-br from-white to-gray-50 p-6">
                        <h3 className="text-foreground mb-4 text-sm font-semibold">
                          Recent Activity
                        </h3>
                        <div className="space-y-4">
                          {[
                            {
                              time: '09:30',
                              text: 'New patient registration',
                              color: 'bg-blue-500',
                            },
                            {
                              time: '10:15',
                              text: 'Lab results received',
                              color: 'bg-emerald-500',
                            },
                            {
                              time: '11:00',
                              text: 'Doctor consultation',
                              color: 'bg-purple-500',
                            },
                          ].map((activity, index) => (
                            <div key={index} className="flex items-start gap-3">
                              <div className="relative">
                                <div
                                  className={`h-1.5 w-1.5 ${activity.color} mt-1 rounded-full`}
                                ></div>
                                {index < 2 && (
                                  <div className="bg-border/30 absolute top-3 left-0.5 h-12 w-0.5"></div>
                                )}
                              </div>
                              <div className="flex-1">
                                <div className="text-foreground text-xs">{activity.text}</div>
                                <div className="text-muted-foreground mt-1 text-[10px]">
                                  {activity.time}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="border-border/30 rounded-2xl border bg-gradient-to-br from-white to-gray-50 p-6">
                        <h3 className="text-foreground mb-4 text-sm font-semibold">
                          Quick Actions
                        </h3>
                        <div className="space-y-3">
                          {[
                            {
                              icon: <FileText className="h-3 w-3" />,
                              text: 'New Patient',
                              variant: 'primary',
                            },
                            {
                              icon: <Calendar className="h-3 w-3" />,
                              text: 'Schedule Appointment',
                              variant: 'secondary',
                            },
                            {
                              icon: <Users className="h-3 w-3" />,
                              text: 'View All Patients',
                              variant: 'outline',
                            },
                          ].map((action, index) => (
                            <button
                              key={index}
                              className={`flex w-full cursor-pointer items-center gap-3 rounded-lg px-4 py-2.5 text-xs font-medium transition-all duration-200 ${
                                action.variant === 'primary'
                                  ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                                  : action.variant === 'secondary'
                                    ? 'bg-accent text-accent-foreground hover:bg-accent/80'
                                    : 'border-input hover:bg-accent border'
                              }`}
                            >
                              {action.icon}
                              {action.text}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-0 bg-linear-to-r from-transparent via-transparent to-gray-50"></div>
            <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-transparent via-transparent to-gray-50"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
